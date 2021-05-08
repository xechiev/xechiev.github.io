export class Search {
    constructor(layout, api) {
      this.layout = layout;
      this.api = api;
      
      this.layout.input.addEventListener('keyup', this.debounce(this.searchRepositoriess.bind(this), 500));
    }
  
    searchRepositoriess() {
      if(this.layout.input.value) {
        this.api.loadAccounts(this.layout.input.value).then(response => this.updatedAccounts(response))
      } else {
        this.clearAccounts();
      }
    }

    updatedAccounts(res, isUpdate = false) {
        let accounts;
        if(res.ok) {
            if(!isUpdate) {
               this.clearAccounts(); 
            }
            res.json().then(res => {
                if(res.items) {
                    accounts = res.items
                    accounts.forEach(acc => this.layout.createAccounts(acc));
                } else {
                    this.clearAccounts();
                }
            })
        } else {
            console.log('Возникла ошибка :' + response.status)
        }
    }


    clearAccounts() {
      this.layout.box_1.innerHTML = ''; 
    };
  
    debounce = (fn, ms) => {
      let timeout;
      return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
      };
    }
};
  
  
  