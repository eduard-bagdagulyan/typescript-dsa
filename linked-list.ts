class ListNode {
    data: any
    next: ListNode | null

    constructor(data: any) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    head: ListNode
    length: number = 0

    constructor(data: any) {
        this.head = new ListNode(data)
        this.length++
    }

    push(data: any) {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = new ListNode(data)
        this.length++
    }
}

const list = new LinkedList(1)
list.push(2)
console.log(list)
