/*
Written by John Nemec (@john.nemec-3359)

  What does all this code do?
    It handles the dropdown menus, filter selection, and populating the search results table

  resetFilters() is intended to have all filters and search results the same as when the page is first loaded
    this means having no filters selected, all dropdown menus collapsed, and the search results table filled

  toggleFilter(myFilter) is intended to be called whenever a toggle button is pressed, and determines the next function to be called
    if a dropdown toggle button is pressed, it will call the toggleDropdown(filter) function
    if a filter selection toggle button is pressed, it will call the toggleSelection(filter) function 

  collapseSection(myFilter) is inteded to be used to collapse a dropdown section via the collapse section button
    it barely needs to be a funciton, and only exists for the sake of organization & code clarity 

  toggleDropdown(myFilter) is intended to expand and contract the 3 dropdown menus when toggled
    it handles adjusting visibility of elements contained within the drop down, and adjusting the height of the dropdown card element itself 

  toggleSelection(myFilter) is intended to toggle a filter selection toggle button on and off, and update the search results table accordingly 
    it will update the filter selection toggle button's apperance, and call either toggleVisibilityOn(filter) 
    or toggleVisbilityOff(filter) depending on if a filter selection is being toggled on or off 

  toggleVisbilityOn(filter) and toggleVisbilityOff(filter) are intended to update the search terms used to populate the search results table, and refresh the table 
    these functions work by adding or removing words from a hidden searchbox, and triggering an event on the search box,
    as if someone was typing in each search term by hand. 

  formatFilter(myFilter) will format a filter string to be displayed
    for example, it will take "whitepapers_resource" as input and provide "Whitepapers" as output
*/

function resetFilters() {

  // set all filters to off
  var techFilters = document.getElementById("technology-list")
  for (let i = 0; i < techFilters.children.length; i++) {
    if (techFilters.children[i].children[0].value == "on") {
      toggleSelection(techFilters.children[i].children[0])
    }
  }
  var personaFilters = document.getElementById("persona-list")
  for (let i = 0; i < personaFilters.children.length; i++) {
    if (personaFilters.children[i].children[0].value == "on") {
      toggleSelection(personaFilters.children[i].children[0])
    }
  }
  var resourceFilters = document.getElementById("resource-list")
  for (let i = 0; i < resourceFilters.children.length; i++) {
    if (resourceFilters.children[i].children[0].value == "on") {
      toggleSelection(resourceFilters.children[i].children[0])
    }
  }
  // undrop drop downs 
  var techDropDown = document.getElementById("technology-toggle")
  if (techDropDown.value == "on") {
    toggleDropdown(techDropDown)
  }
  var personaDropDown = document.getElementById("persona-toggle")
  if (personaDropDown.value == "on") {
    toggleDropdown(personaDropDown)
  }
  var resourceDropDown = document.getElementById("resource-toggle")
  if (resourceDropDown.value == "on") {
    toggleDropdown(resourceDropDown)
  }
  // clear filter box contents
  var searchbox = document.getElementById("languagestable_wrapper").children[1].firstChild.firstChild.lastChild
  searchbox.value = ''
  searchbox.dispatchEvent(new Event("keyup"))
  //reset result counter and selected filters 
  var resultCountDisplay = document.getElementById("search-results_subheader")
  resultCountDisplay.innerText = "Item results from filter selections"
  var selectedFilters = document.getElementById("search-filters_subheader")
  selectedFilters.innerText = "Selected Filters: N/A"
}
function toggleFilter(myFilter) {

  //checks if we're togging a drop-down or toggling a selection, and calls the appropriate function
  if (myFilter.getAttribute("class").includes("toggle-button")) {
    toggleDropdown(myFilter) //Technology filters dropdown, Persona filters dropdown, and Resource filters dropdown
  } else {
    toggleSelection(myFilter) //specific technologies / personas / resources, such as ADDI, or IDE Specialist, or Tutorials
  }
}

function collapseSection(myFilter) {
  //both the toggle dropdown button and the collapse section button share the same ID
  //the collapse section button's appearnce doesn't need to change, because it gets hidden
  //the collapse section button is only visible when the toggle dropdown button's value is on 
  //therefore, we can just get the toggle dropdown button and use toggleDropdown() on it 
  //the only reason this function exists is to make the function call in the HTML code simpler 
  var otherFilter = document.getElementById(myFilter.getAttribute("id"))
  toggleDropdown(otherFilter)
}

function toggleDropdown(myFilter) {
  //handles displaying or hiding the contents within each drop down 
  var whichFilter = myFilter.getAttribute("id").slice(0, -7)
  var filterList = document.getElementById(whichFilter + "-list")
  if (myFilter.value == "off" || myFilter.value == undefined) { //if displaying drop down contents 
    //update the button
    myFilter.setAttribute("class", "ibm-chevron-up-link toggle-button selected")
    myFilter.value = "on"
    //make each selection filter visible and determine how long the dropdown will be when fully revealed
    let size = 80 //baseline starting height
    for (let i = 0; i < filterList.children.length; i++) {
      filterList.children[i].style.display = "block"
      filterList.children[i].setAttribute("class","ibm-ibm-btn-pri ibm-btn-teal-50 filter_button fadein")
      size += 44
    }
    //set the height of the dropdown
    
    document.documentElement.style.setProperty('--filter-height', size + "px")
    document.getElementById(whichFilter + "-card").setAttribute("class","ibm-card expand")
    document.getElementById(whichFilter + "-card").style.height = size + "px"


  } else { //if hiding drop down contents 
    //update the button
    myFilter.setAttribute("class", "ibm-chevron-down-link toggle-button unselected")
    myFilter.value = "off"
    //hide each selection filter 
    for (let i = 0; i < filterList.children.length; i++) {
      filterList.children[i].style.display = "none"
      filterList.children[i].setAttribute("class","ibm-ibm-btn-pri ibm-btn-teal-50 filter_button fadeout")
    }
    //set the height of the dropdown 
    document.getElementById(whichFilter + "-card").setAttribute("class","ibm-card collapse")
    document.getElementById(whichFilter + "-card").style.height = "80px"

  }
}
function toggleSelection(myFilter) {
  //handle toggling between having a selection filter on or off
  if (myFilter.value == "off") {
    //update the button's apperance and value
    myFilter.setAttribute("class", "ibm-btn-pri ibm-btn-teal-50 filter_button selected");
    myFilter.value = "on"
    myFilter.style.backgroundColor = "#002d9c" //blue 80
    //add filter to search 
    toggleVisibilityOn(myFilter.getAttribute("id").slice(0, -7))
  } else {
    //update the button's apperance and value
    myFilter.setAttribute("class", "ibm-btn-pri ibm-btn-teal-50 filter_button unselected");
    myFilter.value = "off"
    myFilter.style.backgroundColor = "#008571" //specified in www.css, even though that's not IBM Teal 50
    //remove filter from search
    toggleVisibilityOff(myFilter.getAttribute("id").slice(0, -7))
  }
  //update the result counter
  var resultCountDisplay = document.getElementById("search-results_subheader")
  var resultCount = document.getElementById('resources-table').children.length

  if (resultCount == 1) {
    if (document.getElementById('resources-table').children[0].getAttribute('role') == null) {
      resultCountDisplay.innerText = "No results found"
    } else {
      resultCountDisplay.innerText = resultCount + " result found"
    }
  } else {
    resultCountDisplay.innerText = resultCount + " results found"
  }


}
function toggleVisibilityOn(filter) {
  //find the searchbox
  var searchbox = document.getElementById("languagestable_wrapper").children[1].firstChild.firstChild.lastChild
  //add the filter to the searchbox's search terms
  searchbox.value += filter + " "
  //trigger an event to have the searchbox update the search results 
  searchbox.dispatchEvent(new Event("keyup"))
  //update displayed search query 
  filter = formatFilter(filter)
  var selectedFilters = document.getElementById("search-filters_subheader")
  if (selectedFilters.innerText.includes("N/A")) {
    selectedFilters.innerText = selectedFilters.innerText.replace("N/A", filter)
  } else {
    selectedFilters.innerText = selectedFilters.innerText + ", " + filter
  }
}
function toggleVisibilityOff(filter) {
  //find the searchbox 
  var searchbox = document.getElementById("languagestable_wrapper").children[1].firstChild.firstChild.lastChild
  //remove the filter from the searchbox's search terms
  searchbox.value = searchbox.value.replace(filter + " ", '')
  //trigger an event to have the searchbox update the search results
  searchbox.dispatchEvent(new Event("keyup"))
  //update displayed search query
  filter = formatFilter(filter)
  var selectedFilters = document.getElementById("search-filters_subheader")
  //filter in middle or end of list
  selectedFilters.innerText = selectedFilters.innerText.replace(", " + filter, '')
  //filter is first and not only
  selectedFilters.innerText = selectedFilters.innerText.replace(": " + filter + ',', ':')
  //filter is only selected filter
  selectedFilters.innerText = selectedFilters.innerText.replace(": " + filter, ':')
  if (selectedFilters.innerText == "Selected Filters:") {
    selectedFilters.innerText += " N/A"
  }
}

//used for abstract textbox visibility
function toggleAbstract(item) {
  var textbox = item.parentNode.children[2]
  if (textbox.style.display == "none") {
    textbox.style.display = "block"
    item.setAttribute("class", "ibm-chevron-up-link abstract-toggle-button selected")
  } else {
    textbox.style.display = "none"
    item.setAttribute("class", "ibm-chevron-down-link abstract-toggle-button unselected")
  }
}

function formatFilter(myFilter){
  return document.getElementById(myFilter+"-button").innerText
}