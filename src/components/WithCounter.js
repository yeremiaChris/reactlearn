import React from 'react'

const withCounter = (WrapComponent, increment) => {
    // return new Component
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }


        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + increment
                }
            })
        }

        render() {
            return <WrapComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                // ini dibawah dibuat sebagai paramater sisa karena di app.js apapun props yang kita buat
                // akan di kirim ke sini
                // jadi harus dibuat sisa parameter agar bisa di baca di child componentnya

                {...this.props}
            />
        }
    }

    return WithCounter
}


export default withCounter

// HOC (higher order component)
// menerima original componnet dan mengembalikan component baru