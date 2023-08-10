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
    m[p+"notes-data"]       ={url:H+"/form-grid/backend/notes-data.html",Table:"notes-sleepback",form_module:"notes-form"},
    m[p+"notes-form"]       ={url:H+"/form-grid/backend/notes-form.html",Table:"notes-sleepback"},

    m[p+"oq-bl"] ={url:I+"/oq-bl.html"};
    m[p+"oq-fu"] ={url:I+"/oq-fu.html"};
    
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1,task_name:"Study Panel"};
    m[p+"panel-child"]=              {url:H+"/panels/child.html",task_name:"Data Entry"};
    m[p+"panel-oq-bl"]=              {url:H+"/panels/oq-bl.html"};
    m[p+"panel-oq-fu"]=              {url:H+"/panels/oq-fu.html"};
    m[p+"randomisation-table-data"]=		{url:H+"/form-grid/backend/randomisation-table-data.html",Table:"randomisation-table-sleepback",form_module:"randomisation-table-form",task_name:"Randomisation Table"},
    m[p+"randomisation-table-form"]=		{url:H+"/form-grid/backend/randomisation-table-form.html",Table:"randomisation-table-sleepback",task_name:"Randomisation Table"},
    m[p+"access-code-data"] ={url:H+"/form-grid/backend/access-code-data.html",Table:"access-code-sleepback",form_module:"access-code-form", task_name:"Access Code" };
    m[p+"access-code-form"] ={url:H+"/form-grid/backend/access-code-form.html",Table:"access-code-sleepback", task_name:"Access Code" };

    m[p+"demographics-bl-data"]               ={url:H+"/form-grid/backend/demographics-data.html",Table:"demographics-bl-sleepback",form_module:"demographics-bl-form",task_name:"Baseline - Demographics"};
    m[p+"demographics-bl-form"]               ={url:H+"/form-grid/backend/demographics-form.html",Table:"demographics-bl-sleepback",task_name:"Baseline - Demographics"};
    m[p+"BPI-bl-data"]               ={url:H+"/form-grid/backend/BPI-data.html",Table:"BPI-bl-sleepback",form_module:"BPI-bl-form",task_name:"Baseline - BPI"};
    m[p+"BPI-bl-form"]               ={url:H+"/form-grid/backend/BPI-form.html",Table:"BPI-bl-sleepback",task_name:"Baseline - BPI"};
    m[p+"PSQI-bl-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-bl-sleepback",form_module:"PSQI-bl-form",task_name:"Baseline - PSQI"};
    m[p+"PSQI-bl-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-bl-sleepback",task_name:"Baseline - PSQI"};
    m[p+"PHQ-2-bl-data"]               ={url:H+"/form-grid/backend/PHQ-2-data.html",Table:"PHQ-2-bl-sleepback",form_module:"PHQ-2-bl-form",task_name:"Baseline - PHQ-2"};
    m[p+"PHQ-2-bl-form"]               ={url:H+"/form-grid/backend/PHQ-2-form.html",Table:"PHQ-2-bl-sleepback",task_name:"Baseline - PHQ-2"};
    m[p+"GAD-7-bl-data"]               ={url:H+"/form-grid/backend/GAD-7-data.html",Table:"GAD-7-bl-sleepback",form_module:"GAD-7-bl-form",task_name:"Baseline - GAD-7"};
    m[p+"GAD-7-bl-form"]               ={url:H+"/form-grid/backend/GAD-7-form.html",Table:"GAD-7-bl-sleepback",task_name:"Baseline - GAD-7"};
    m[p+"PBAS-bl-data"]               ={url:H+"/form-grid/backend/PBAS-data.html",Table:"PBAS-bl-sleepback",form_module:"PBAS-bl-form",task_name:"Baseline - PBAS"};
    m[p+"PBAS-bl-form"]               ={url:H+"/form-grid/backend/PBAS-form.html",Table:"PBAS-bl-sleepback",task_name:"Baseline - PBAS"};
    m[p+"EQ-5D-bl-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-bl-sleepback",form_module:"EQ-5D-bl-form",task_name:"Baseline - EQ-5D"};
    m[p+"EQ-5D-bl-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-bl-sleepback",task_name:"Baseline - EQ-5D"};
    m[p+"eHEALs-bl-data"]               ={url:H+"/form-grid/backend/eHEALS-data.html",Table:"eHEALs-bl-sleepback",form_module:"eHEALs-bl-form",task_name:"Baseline - eHEALs"};
    m[p+"eHEALs-bl-form"]               ={url:H+"/form-grid/backend/eHEALS-form.html",Table:"eHEALs-bl-sleepback",task_name:"Baseline - eHEALs"};

    m[p+"med-use-fu-data"]               ={url:H+"/form-grid/backend/med-use-data.html",Table:"med-use-fu-sleepback",form_module:"med-use-fu-form",task_name:"Follow-up - Med-use"};
    m[p+"med-use-fu-form"]               ={url:H+"/form-grid/backend/med-use-form.html",Table:"med-use-fu-sleepback",task_name:"Follow-up - Med-use"};
    m[p+"BPI-fu-data"]               ={url:H+"/form-grid/backend/BPI-data.html",Table:"BPI-fu-sleepback",form_module:"BPI-fu-form",task_name:"Follow-up - BPI"};
    m[p+"BPI-fu-form"]               ={url:H+"/form-grid/backend/BPI-form.html",Table:"BPI-fu-sleepback",task_name:"Follow-up - BPI"};
    m[p+"ISI-fu-data"]               ={url:H+"/form-grid/backend/ISI-data.html",Table:"ISI-fu-sleepback",form_module:"ISI-fu-form",task_name:"Follow-up - ISI"};
    m[p+"ISI-fu-form"]               ={url:H+"/form-grid/backend/ISI-form.html",Table:"ISI-fu-sleepback",task_name:"Follow-up - ISI"};
    m[p+"PSQI-fu-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-fu-sleepback",form_module:"PSQI-fu-form",task_name:"Follow-up - PSQI"};
    m[p+"PSQI-fu-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-fu-sleepback",task_name:"Follow-up - PSQI"};
    m[p+"PHQ-2-fu-data"]               ={url:H+"/form-grid/backend/PHQ-2-data.html",Table:"PHQ-2-fu-sleepback",form_module:"PHQ-2-fu-form",task_name:"Follow-up - PHQ-2"};
    m[p+"PHQ-2-fu-form"]               ={url:H+"/form-grid/backend/PHQ-2-form.html",Table:"PHQ-2-fu-sleepback",task_name:"Follow-up - PHQ-2"};
    m[p+"GAD-7-fu-data"]               ={url:H+"/form-grid/backend/GAD-7-data.html",Table:"GAD-7-fu-sleepback",form_module:"GAD-7-fu-form",task_name:"Follow-up - GAD-7"};
    m[p+"GAD-7-fu-form"]               ={url:H+"/form-grid/backend/GAD-7-form.html",Table:"GAD-7-fu-sleepback",task_name:"Follow-up - GAD-7"};
    m[p+"PBAS-fu-data"]               ={url:H+"/form-grid/backend/PBAS-data.html",Table:"PBAS-fu-sleepback",form_module:"PBAS-fu-form",task_name:"Follow-up - PBAS"};
    m[p+"PBAS-fu-form"]               ={url:H+"/form-grid/backend/PBAS-form.html",Table:"PBAS-fu-sleepback",task_name:"Follow-up - PBAS"};
    m[p+"EQ-5D-fu-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-fu-sleepback",form_module:"EQ-5D-fu-form",task_name:"Follow-up - EQ-5D"};
    m[p+"EQ-5D-fu-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-fu-sleepback",task_name:"Follow-up - EQ-5D"};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
