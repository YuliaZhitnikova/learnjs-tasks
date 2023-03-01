'use strict';

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

  // ошибка тк this будет определяться в момент вызова и вернет undefined