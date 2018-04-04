function displayEvent() {
    var eventChoice = document.getElementById("event-choice")
    var displayResult = eventChoice.options[eventChoice.selectedIndex].text;
    document.getElementById("event-details").innerHTML = displayResult;

}
