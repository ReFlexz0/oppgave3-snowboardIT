const products = {
    data() {
        return {
            user: "admin",
            filteredby: "all",
            title: "All Products",
            activesort: true,
            sortbypopularity: true,
            sortbypricehigh: false,
            sortbypricelow: false,
            filteritems: true,
            createbackup: true,
            selected_b1: "Popularity",
            backuplist: [],
            filteredproducts: [],
            products: [{
                    id: "1",
                    name: "The Cinema",
                    description: "Potato",
                    price: "4 499",
                    image: "./products/product_images/snowboards/snowboard_the_cinema.jpg",
                    type: "Snowboard",
                    popularity: "0",
                },
                {
                    id: "2",
                    name: "Explosive Energy",
                    description: "Potato",
                    price: "4 799",
                    image: "./products/product_images/snowboards/snowboard_explosive_energy.jpg",
                    type: "Snowboard",
                    popularity: "1",
                },
                {
                    id: "3",
                    name: "Lightning rod",
                    description: "Potato",
                    price: "5 149",
                    image: "./products/product_images/snowboards/snowboard_Lightning_rod.jpg",
                    type: "Snowboard",
                    popularity: "3",
                },
                {
                    id: "4",
                    name: "Mountain Lion",
                    description: "Potato",
                    price: "3 799",
                    image: "./products/product_images/snowboards/snowboard_mountain_lion.jpg",
                    type: "Snowboard",
                    popularity: "2",
                },
                {
                    id: "5",
                    name: "Mountain Rider",
                    description: "Potato",
                    price: "4 999",
                    image: "./products/product_images/snowboards/snowboard_mountain_rider.jpg",
                    type: "Snowboard",
                    popularity: "6",
                },
                {
                    id: "6",
                    name: "The Airbourne",
                    description: "Potato",
                    price: "6 199",
                    image: "./products/product_images/snowboards/snowboard_the_airbourne.jpg",
                    type: "Snowboard",
                    popularity: "5",
                },
                {
                    id: "7",
                    name: "Snowboard Case",
                    description: "Potato",
                    price: " 999",
                    image: "./products/product_images/snowboardbags/snowboardbag_boardcase.jpg",
                    type: "Bag",
                    popularity: "0",
                },
            ],
            items: [{
                    name: "All Products",
                    tags: "all",
                    id: "0"
                },
                {
                    name: "Snowboards",
                    tags: "Snowboard",
                    id: "1"
                },
                {
                    name: "Snowboardbags",
                    tags: "Bag",
                    id: "2"
                },
            ],
            subcategory: [{
                    name: "All Snowboards",
                    tags: "Snowboard",
                    id: "1",
                },
                {
                    name: "All Snowboardbags",
                    tags: "Bag",
                    id: "2",
                },
            ]
        }
    },
    computed: {
        filtered() {


            if (this.createbackup) {
                for (i in this.products) {
                    this.backuplist.push(this.products[i])
                }
                this.createbackup = false
            }


            if (this.activesort) {
                this.activesort = !this.activesort
                if (this.sortbypopularity) {
                    if (this.filteredby != "all") {
                        var ind = 0
                        var lenght = this.products.length;
                        for (i = 0; i < lenght; i++) {
                            if (this.products[ind].type != this.filteredby) {
                                this.filteredproducts.push(this.products[ind])
                                this.products.splice(ind, 1)
                            } else { ind++; }
                        }
                        this.activesort = true
                    } else {}
                    return this.products.sort(function(a, b) {
                        return b.popularity - a.popularity
                    })
                }
                if (this.sortbypricehigh) {
                    if (this.filteredby != "all") {
                        var ind = 0
                        var lenght = this.products.length;
                        for (i = 0; i < lenght; i++) {
                            if (this.products[ind].type != this.filteredby) {
                                this.filteredproducts.push(this.products[ind])
                                this.products.splice(ind, 1)
                            } else { ind++; }
                        }
                        this.activesort = true
                    } else {}
                    return this.products.sort(function(a, b) {
                        return b.price > a.price
                    })
                }
                if (this.sortbypricelow) {
                    if (this.filteredby != "all") {
                        var ind = 0
                        var lenght = this.products.length;
                        for (i = 0; i < lenght; i++) {
                            if (this.products[ind].type != this.filteredby) {
                                this.filteredproducts.push(this.products[ind])
                                this.products.splice(ind, 1)
                            } else { ind++; }
                        }
                        this.activesort = true
                    } else {}
                    return this.products.sort(function(a, b) {
                        return b.price < a.price
                    })
                }
            }
        }
    },
    methods: {
        sorting_filters(name) {
            this.selected_b1 = name
        },
        additemfilter(ft) {
            this.filteredby = ft.tags
            this.products = this.backuplist.slice(0);
            this.title = ft.name
            this.activesort = true
        },
        redirectproductpage(productid) {
            url = "/html/productview.html?id=" + productid
            window.location.href = url
        }
    },
    watch: {
        selected_b1: function() {
            if (this.selected_b1 == "Popularity") {
                this.sortbypricehigh = false
                this.sortbypricelow = false

                this.sortbypopularity = true
                this.activesort = true
            }
            if (this.selected_b1 == "High to low") {
                this.sortbypopularity = false
                this.sortbypricelow = false

                this.sortbypricehigh = true
                this.activesort = true
            }
            if (this.selected_b1 == "Low to high") {
                this.sortbypricehigh = false
                this.sortbypopularity = false

                this.sortbypricelow = true
                this.activesort = true
            }
        }
    }
}



Vue.createApp(products).mount("#plist")