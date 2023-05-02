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
    m[p+"survey-data"]       ={url:H+"/form-grid/survey/eligibility-data.html",Table:"backpainsleep-survey",router:1 };
    m[p+"survey-all-data"]   ={url:H+"/form-grid/survey/eligibility-data.html",Table:"backpainsleep-survey",router:1 };
    m[p+"contact-data"]      ={url:H+"/form-grid/survey/contact-data.html",Table:"backpainsleep-contact",form_module:"contact-form",router:1,taskname:"Contact details" };
    m[p+"contact-form"]      ={url:H+"/form-grid/survey/contact-form.html",Table:"backpainsleep-contact"};
    

    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
