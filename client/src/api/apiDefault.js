import axios from 'axios'

const url = '/api/default'

class apiDefault {
    // test default get request
    static get_default() {
        return new Promise (async (resolve,reject)=> {
            try {
                const response = await axios.get(url)
                // eslint-disable-next-line
                console.log(response.data)
                resolve(response.data)
            } catch(err) {
                // eslint-disable-next-line
                console.log('ERROR')
                reject(err)
            }
        }).catch(error => {
            //error behavior is here
            return error
        })
    }
}

export default apiDefault