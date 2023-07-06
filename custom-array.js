function array(...items) {
    this.items = items;
    this.push = function (item) {
        this.items[this.items.length] = item;
    }
    this.pop = function () {
        if(this.items.length === 0) return null;
        return this.items.splice(this.items.length - 1, 1);
    }
    this.filter = function (f) {
        const result = [];
        this.items.forEach(i => {
            if (f(i))
                result.push(i);
        })
        return result;
    }
    return this;
}

const friends = array("Ben", "Lynn", "Alex");
friends.push("Mikenzi");
console.log(friends.pop());
const f = friends.filter(friend => {
    return friend.length === 4;
})
console.log(f);
