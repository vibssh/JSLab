var _PeopleManagement = (function (window) {
    'use strict';
    var _settings = {
        $addPersonBtn: document.querySelector('#add-person'),
        $personList: document.querySelector('#people-list'),
        $personInput: document.querySelector('#input-person'),
        $count: 0
    };

    var bindUIActions = function () {
        //On load of the page auto focus the add Person input 
        _settings.$personInput.focus();

        //Add Person to the list
        _settings.$addPersonBtn.addEventListener("click", _addPerson);

        //Remove Person from the list
        document.addEventListener("click", function (e) {
            //if click element has the class 'remove-btn' do the method
            if (e.target && e.target.classList.contains("remove-btn")) {
                _removePerson(e.target);
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
        });

    };

    var _addPerson = function () {
        /* UI Manipulation  */
        //Create a list item
        var listItem = document.createElement("li");
        // Set a class to the list item for styling
        listItem.setAttribute("class", "list-group-item");
        //Print the text inside the list item 
        listItem.innerHTML = _settings.$personInput.value;

        //Adding class to make it green
        listItem.classList.add('added');

        //Create a remove btn element
        var removeBtnEl = document.createElement("span");
        removeBtnEl.setAttribute("class", "glyphicon glyphicon-remove remove-btn");

        //Append the remove button to the list
        listItem.appendChild(removeBtnEl);

        // Append the listitem to the Parent UL
        _settings.$personList.appendChild(listItem);

        //Reset the input UI
        _settings.$personInput.value = '';
        _settings.$personInput.focus();

        /**
         * DATA MANAGMENT - Publish - send the Topic Index to EventManagement
         */
        PubSub.publish(_EventManagement.evtSettings.Topics[0]);
        
         
    };

    var _removePerson = function ($clicked) {
        /* ui Manipulation  */
        var parentNode = $clicked.parentNode; // Getting the parent Node of the cancel button
        parentNode.classList.add('removed');
       
        /**
         * DATA MANAGMEMENT - Publish - send the Topic Index to EventManagement
         */
        PubSub.publish(_EventManagement.evtSettings.Topics[1]);
    };

    return {
        bindUIActions: bindUIActions
    }
}(window));