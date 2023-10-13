import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _item: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    const num = Func.val(10, 20)
    for(let i = 0; i < num; i++) {
      const el = document.createElement('div')
      el.classList.add('js-item')
      this.el.prepend(el)

      this._item.push(new Item({
        el: el,
        id: i,
      }))

      el.style.width = ((1 / num) * 1) * 100 + '%'
    }
  }
}