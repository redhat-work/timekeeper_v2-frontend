/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.timecard-pm')
    .controller("timecard-pm-view",ctrl);

    /** @ngInject */
    function ctrl($scope, timecardService, $stateParams) {

        console.log($scope.fromState);

        if($stateParams.timecardID){

            console.log($stateParams.timecardID);
            timecardService.getByID($stateParams.timecardID).then(function(response){
                console.log(response.data);
                var timecard = response.data;
                var entries = timecard.timecard_entries;
                var start_date = new Date(entries[0].day);

                $scope.items=[];
                for(var i=0;i<7;i++){
                    var item = {};
                    item.hours=0;
                    item.day = new Date(start_date.getFullYear(),start_date.getMonth(),start_date.getDate()+i);
                    $scope.items.push(item);
                }

                var tasks = [];
                //get tasks
                for(var i=0;i<entries.length;i++){

                    var achou = false;
                    for(var j= 0 ; j<tasks.length && !achou;j++){
                        if(entries[i].task.name.indexOf(tasks[j].name)>-1){
                            achou = true;
                            
                            tasks[j].entries.push(entries[i].work_hours);
                            tasks[j].total+=entries[i].work_hours;
                        }
                    }
                    if(!achou){
                        tasks.push({
                            name:entries[i].task.name,
                            total:entries[i].work_hours,
                            entries: [entries[i].work_hours]
                        })
                    }
                    for(var j= 0 ; j<$scope.items.length ;j++){
                        //console.log($scope.items[j].day);
                        //console.log(entries[i].day);
                        if($scope.items[j].day.getTime()=== new Date(entries[i].day).getTime()){
                            $scope.items[j].hours += entries[i].work_hours;
                        }
                    }


                }
                console.log(tasks);
                $scope.tasks= tasks;

                //for()



            })

        }
    }

})();
