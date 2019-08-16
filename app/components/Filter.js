import React from 'react'

class Filter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            pairs:[],
            dateStart: '',
            dateEnd: '',
            minPrice: '',
            maxPrice: '',
            minQty: '',
            maxQty: '',
            isCollapsed: false,
            formHeight: '300px'
        }

        this.handleChange = this.handleChange.bind(this)
        this.collapseMenu = this.collapseMenu.bind(this)
    }

    handleChange(event){
        const {name, value, id} = event.target
        id !== 'multiSelect' ? this.setState({
            [name] : value
        }) :
        this.setState(prevState => { 
            return{
                [name] : !prevState[name].includes(value) ? 
                [].concat(...prevState[name], value) 
                : prevState[name].filter(element => element !== value)
            }
        }) 
        console.log(this.state)
    }

    collapseMenu(){
        this.state.isCollapsed ? 
        this.setState(prevState => {
            return  {
                formHeight:'300px',
                isCollapsed: !prevState.isCollapsed
            }
        }) 
        :
        this.setState(prevState => {
            return  {
                formHeight:'50px',
                isCollapsed: !prevState.isCollapsed
            }
        })
    }

    render(){
        return (
            <form className='filterForm' style={{ height: this.state.formHeight}}>
                <h1>Filter</h1>
                <div className='collapseToggler'onClick={this.collapseMenu}>{this.state.isCollapsed ? '<' : '>'}</div>
                <div className="formFields" style={{display: this.state.isCollapsed ? 'none':''}}>
                    <div className=' fields pairsField'>
                        <label htmlFor='pairs'>Pairs</label>
                        <select onChange={this.handleChange} multiple={true} id='multiSelect' name='pairs' value={this.state.pairs}>
                            <option value='eur/gbp'>'EUR/GPB'</option>
                            <option value='eur/usd'>'EUR/USD'</option>
                            <option value='gpb/usd'>'GPB/USD'</option>
                        </select>
                    </div>
                    <div className=' fields dateStartField'>
                        <label htmlFor='dateStart'>Start</label>
                        <input type='date' onChange={this.handleChange} name='dateStart' value={this.state.start}/>
                    </div>
                    <div className=' fields dateEndField'>
                        <label htmlFor='dateEnd'>End</label>
                        <input type='date' onChange={this.handleChange} name='dateEnd' value={this.state.end}/>
                    </div>
                    <div className=' fields minPriceField'>
                        <label htmlFor='minPrice'>Min Price</label>
                        <input type='number' onChange={this.handleChange} name='minPrice' value={this.state.minPrice}/>
                    </div>
                    <div className=' fields maxPriceField'>
                        <label htmlFor='maxPrice'>Max Price</label>
                        <input type='number' onChange={this.handleChange} name='maxPrice' value={this.state.maxPrice}/>
                    </div>
                    <div className=' fields minQtyField'>
                        <label htmlFor='minQty'>Min Qty</label>
                        <input type='number' onChange={this.handleChange} name='minQty' value={this.state.minQty}/>
                    </div>
                    <div className=' fields maxQtyField'>
                        <label htmlFor='maxQty'>Max Qty</label>
                        <input type='number' onChange={this.handleChange} name='maxQty' value={this.state.maxQty} />
                    </div>
                </div>
            </form>
        )
    }
}

export default Filter