function toggleCourseTabs(whichTab){
    //myFilter.setAttribute("class", "ibm-btn-pri ibm-btn-blue-50 filter_button selected");
    //myFilter.setAttribute("class", "ibm-btn-pri ibm-btn-teal-50 filter_button unselected");
    var table1 = document.getElementById("course-calendar-table1")
    var button1 = document.getElementById("courses-tab1")
    var table2 = document.getElementById("course-calendar-table2")
    var button2 = document.getElementById("courses-tab2")
    var table3 = document.getElementById("course-calendar-table3")
    var button3 = document.getElementById("courses-tab3")
//002d9c selected
//4589ff unselected
    switch(whichTab){
        case 1:
            table1.setAttribute("style", "width:100%;")
            button1.setAttribute("style", "background: #002d9c; border-color: #002d9c;");
            table2.setAttribute("style", "width:100%; display:none;")
            button2.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            table3.setAttribute("style", "width:100%; display:none;")
            button3.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            break;
        case 2:
            table1.setAttribute("style", "width:100%; display:none;")
            button1.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            table2.setAttribute("style", "width:100%;")
            button2.setAttribute("style", "background: #002d9c; border-color: #002d9c;");
            table3.setAttribute("style", "width:100%; display:none;")
            button3.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            break;
        case 3:
            table1.setAttribute("style", "width:100%; display:none;")
            button1.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            table2.setAttribute("style", "width:100%; display:none;")
            button2.setAttribute("style", "background: #4589ff; border-color: #4589ff;");
            table3.setAttribute("style", "width:100%;")
            button3.setAttribute("style", "background: #002d9c; border-color: #002d9c;");            
            break;
        default:
    }
}