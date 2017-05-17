REM ;; CD should be the root of the project (argos-icboe)
SET SDK=%CD%\..\..\argos-sdk
SET VERSION=%~1
SET BUNDLE_NAME=ICRM BOE Mobile v%VERSION% VFS.zip

call grunt less babel

REM ;; Setup the deploy directory, copy over the empty bundle template to it
rmdir /S /Q deploy
rmdir /S /Q %SDK%\deploy
mkdir deploy
mkdir %SDK%\deploy
mkdir %SDK%\deploy\temp
mkdir deploy\bundle
mkdir deploy\bundle\model
xcopy bundle\model\*.* deploy\bundle\model /E /Y

REM ;; Setup the folder structure in the model
mkdir deploy\bundle\model\Portal\SlxMobile\SourceFiles
mkdir deploy\bundle\model\Portal\SlxMobile\SourceFiles\products
mkdir deploy\bundle\model\Portal\SlxMobile\SourceFiles\products\argos-icboe

REM ;; Copy the argos-icboe files into a temp folder *outside* our current root, copy them back into the model under sourcefiles
xcopy *.* %SDK%\deploy\temp /E /Y /exclude:build\bundleExcludes.txt
xcopy %SDK%\deploy\temp\*.* deploy\bundle\model\Portal\SlxMobile\SourceFiles\products\argos-icboe /E /Y

REM ;; Cleanup the temp folder
rmdir %SDK%\deploy\temp /S /Q

%SDK%\tools\bundler\Bundler.exe /ProjectPath:"%CD%\deploy\bundle\model" /BundleFileName:"%CD%\deploy\%BUNDLE_NAME%" /BundleMethod:All /ConfigFileName:"%CD%\build\bundle.config"
