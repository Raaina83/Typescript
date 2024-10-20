import ListItem from "./ListItem";

export interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(item: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {
    static instance: FullList = new FullList();

    private constructor(
        private _list: ListItem[] = []
    ) {}

    get list() {
        return this._list;
    }
    
    load(): void {
        const storedItems: string | null = localStorage.getItem("MyList");
        if(typeof storedItems !== "string") return;
        const parsedList:{_id: string, _item: string ,_checked: boolean}[]  = JSON.parse(storedItems);
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        })
    }
    save(): void {
        localStorage.setItem("MyList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(item: ListItem): void {
        this._list.push(item);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id != id);
    }
}