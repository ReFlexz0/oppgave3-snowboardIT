import { onMounted } from "@vue/runtime-core"
import { storeproducts } from "./productlist.js"


const test = {
    data() {
        return {
            compute: true,
            productid: 0,
            product: ["tomato"],
            currenttime: 0,
        }
    },
    setup() {

    },
    mounted() {
        this.$nextTick(function() {
            this.productid = new URLSearchParams(window.location.search).get('id')
            console.log(this.productid)

            this.product = storeproducts[this.productid - 1]
        });
        setInterval(() => {
            var time = new Date();
            var date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
            this.currenttime = time.getHours() + ":" + time.getMinutes() + "  " + date;
        })
    }
}
Vue.createApp(test).mount("#productviewhandler")