import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  
  renderButtons = () => {
    const years = [2019, 2018, 2017, 2016, 2015, 2014, 2013]

    return years.map((item, index) => 
        <button 
          key={index} 
          className="btn" 
          onClick={this.onBtnClick}>
          {item}
        </button>
    )
  }
  
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error">Loading mistake!</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p className="like">{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }

  render() {
    const { year, photos, userName } = this.props
    return (
      <React.Fragment>
        {userName ? 
          <div className="ib page">
            <h4>
              {!year ? 
                <span>Choose a year</span> : 
                <span>In {year} year you have {photos.length} photos</span>}
            </h4>
            <p>{this.renderButtons()}</p>
            {this.renderTemplate()}
          </div> 
          : null
      }
      </React.Fragment>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}