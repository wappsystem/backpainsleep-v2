(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"not_elig1"]         ={url:H+"/form-grid/survey/not_elig1.html"},
    m[p+"thank-you"]         ={url:H+"/form-grid/survey/thank-you.html"},
    m[p+"survey-data"]       ={url:H+"/form-grid/survey/eligibility-data.html",Table:"sleepback-survey",router:1 };
    m[p+"survey-all-data"]   ={url:H+"/form-grid/survey/eligibility-data.html",Table:"sleepback-survey",router:1 };
    m[p+"contact-data"]      ={url:H+"/form-grid/survey/contact-data.html",Table:"sleepback-contact",form_module:"contact-form",router:1,taskname:"Contact details" };
    m[p+"contact-form"]      ={url:H+"/form-grid/survey/contact-form.html",Table:"sleepback-contact"};
    
    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"participant-sleepback"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            online_questionnaire_bl:"oq-bl",
                            online_questionnaire_fu:"oq-fu",
                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                            participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                            task_name:"Participants Data",
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"participant-sleepback",task_name:"Participant's Details"};
    m[p+"notes-data"]       ={url:H+"/form-grid/form-grid/backend/notes-data.html",Table:"notes-sleepback",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/form-grid/backend/notes-form.html",Table:"notes-sleepback"},

    m[p+"oq-bl"] ={url:I+"/oq-bl.html"};
    m[p+"oq-fu"] ={url:I+"/oq-fu.html"};
    
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1,task_name:"Study Panel"};
    m[p+"panel-child"]=              {url:H+"/panels/child.html",task_name:"Data Entry"};
    m[p+"panel-oq-bl"]=              {url:H+"/panels/oq-bl.html"};
    m[p+"panel-oq-fu"]=              {url:H+"/panels/oq-fu.html"};

    m[p+"quest-1-bl-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-1-bl-sleepback",form_module:"quest-1-bl-form",task_name:"Baseline - Questionnaire 1"};
    m[p+"quest-1-bl-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-1-bl-sleepback",task_name:"Baseline - Questionnaire 1"};
    m[p+"quest-2-bl-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-2-bl-sleepback",form_module:"quest-2-bl-form",task_name:"Baseline - Questionnaire 2"};
    m[p+"quest-2-bl-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-2-bl-sleepback",task_name:"Baseline - Questionnaire 2"};
    m[p+"quest-3-bl-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-3-bl-sleepback",form_module:"quest-3-bl-form",task_name:"Baseline - Questionnaire 3"};
    m[p+"quest-3-bl-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-3-bl-sleepback",task_name:"Baseline - Questionnaire 3"};

    m[p+"quest-1-fu-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-1-fu-sleepback",form_module:"quest-1-fu-form",task_name:"Follow-up - Questionnaire 1"};
    m[p+"quest-1-fu-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-1-fu-sleepback",task_name:"Follow-up - Questionnaire 1"};
    m[p+"quest-2-fu-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-2-fu-sleepback",form_module:"quest-2-fu-form",task_name:"Follow-up - Questionnaire 2"};
    m[p+"quest-2-fu-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-2-fu-sleepback",task_name:"Follow-up - Questionnaire 2"};
    m[p+"quest-3-fu-data"]               ={url:H+"/form-grid/backend/ess-data.html",Table:"quest-3-fu-sleepback",form_module:"quest-3-fu-form",task_name:"Follow-up - Questionnaire 3"};
    m[p+"quest-3-fu-form"]               ={url:H+"/form-grid/backend/ess-form.html",Table:"quest-3-fu-sleepback",task_name:"Follow-up - Questionnaire 3"};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
