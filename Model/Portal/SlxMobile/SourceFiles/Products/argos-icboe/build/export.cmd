@echo off

PUSHD ..\..\argos-sdk\tools\argos-localizer\
argos-localizer.exe export --base-path ..\..\.. --config-path ..\..\..\products\argos-icboe\build\localization.json
POPD
