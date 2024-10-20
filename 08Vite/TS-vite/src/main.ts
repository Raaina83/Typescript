import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = ():void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
    itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault();
        const input = document.getElementById("newItem") as HTMLInputElement;
        const newEntryText: string = input.value.trim();
        if(!newEntryText) return;

        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id + 1) : 1;

        const newListItem = new ListItem(itemId.toString(), newEntryText);
        fullList.addItem(newListItem);
        template.render(fullList);
        input.value = "";
    });

    const clear = document.getElementById("clearItemsButton") as HTMLButtonElement;
    clear.addEventListener('click', (): void => {
        fullList.clearList();
        template.clear();
    });

    fullList.load();
    template.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp); //will make sure js is not added until dom content is not there, can use defer, just a diff wasy of doing it!!