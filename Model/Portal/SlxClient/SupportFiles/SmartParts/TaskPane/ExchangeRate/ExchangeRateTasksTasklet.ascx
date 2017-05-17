<div data-dojo-type="Sage.TaskPane.ExchangeRateTasksTasklet" id="exchangeRateTasks"></div>

<script type="text/javascript">
    var exchangeRateTasksActions;
    require(['Sage/TaskPane/ExchangeRateTasksTasklet', 'dojo/ready'],
        function (ExchangeRateTasksTasklet, ready) {
            ready(function () {
                if (!exchangeRateTasksActions) {
                    exchangeRateTasksActions = new ExchangeRateTasksTasklet({
                        id: "exchangeRateTasksActions",
                        clientId: "<%= ClientID %>"
                    });
                }
            });
        }
    );
</script>