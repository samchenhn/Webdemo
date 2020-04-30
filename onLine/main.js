const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: "算法导论", 
				date: "2006-9",
				price: 85.00,
				count: 1,
			},
			{
				id: 2,
				name: "《UNIX 编程艺术》",
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1,
			},
			{
				id: 4,
				name: '代码大全',
				date: '2006-3',
				price: 128.00,
				count:1
			}
		]
	},
	filters: {
		showPrice(price) {
			return '¥' + price.toFixed(2)
		}
	},
	computed: {
		totalPrice() {
			// let value = 0;
			// // for(let i = 0; i < this.books.length; i++) {
			// // 	value += this.books[i].price * this.books[i].count
			// // }
			// for(let item of this.books) {
			// 	value += item.price * item.count
			// }
			// return value;
			
			return this.books.reduce(function(preValue, book) {
				return preValue + book.price * book.count
			}, 0)
		}
	},
	methods: {
		increase(i) {
			console.log('increase books[' + i + ']')
			this.books[i].count += 1
		},
		
		decrease(i) {
			console.log('decrease books[' + i + ']')
			if(this.books[i].count > 1) {
					this.books[i].count -= 1;
			}
		},
		
		del(i) {
			console.log('del books[' + i + ']')
			this.books.splice(i, 1);
		}
	}
})