new Vue({
    el: '#root',
    data: {
        url: '',
        imgurl: '',
        lasturl: '',
        QRs: []
    },
    methods: {
        createIMG() {
            regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            if (regexp.test(this.url)) {
                let http = ''
                if (this.url.substr(0, 4) != 'http') http = 'https://'
                this.imgurl = `https://api.qrserver.com/v1/create-qr-code/?data=${http + this.url}`
                this.lasturl = this.url
                this.url = ''
                this.QRs.push(this.imgurl)
                this.QRs = [...new Set(this.QRs)]
                this.saveQRs()
            }
            else {
                alert('URL is wrong')
            }
        },
        saveQRs(){
            const parsed = JSON.stringify(this.QRs)
            localStorage.setItem('qrs', parsed)
        },
        clearQRs(){
            this.QRs = []
            this.saveQRs()
        }
    },
    mounted(){
        if (localStorage.getItem('qrs')) {
            try {
                this.QRs = JSON.parse(localStorage.getItem('qrs'));
            } catch (e) {
                localStorage.removeItem('qrs');
            }
        }
    },
    computed: {
        reversedQRs(){
            return this.QRs.slice().reverse().slice(0, 6)
        }
    }
})