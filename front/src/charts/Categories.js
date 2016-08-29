import React, { Component } from 'react'
import { Pie } from 'react-chartjs'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.getStats = this.getStats.bind(this)
    this.setColor = this.setColor.bind(this)
  }

  find(data, grade) {
    for(var i = 0; i < data.length; i++) {
      if (data[i].label === grade[0]) {
          return data[i]
      }
    }

    return null
  }

  getStats() {
    const grades = this.props.sites
      .map(site => {
        return site.tls ? site.tls['Grade'] : 'X'
      })
      .reduce((data, grade) => {
        const current = this.find(data, grade)

        if (current) {
          current.value += 1
        } else {
          data.push({label: grade[0], value: 1})
        }

        return data
      }, [])
      .map(grade => {
        grade.value = Math.floor((grade.value / this.props.sites.length) * 100)
        return grade
      })

    return grades
  }

  setColor(label) {
    if(label.includes('A')) {
      return '#569a6f'
    } else if(label.includes('B') || label.includes('C')) {
      return '#efb000'
    } else if(label === 'X') {
      return '#DDDDDD'
    } else {
      return '#DA3E52'
    }
  }

  setData(result) {
    result.map(grade => {
      grade.color = this.setColor(grade.label)
      if (grade.label === 'X') {
        grade.label = 'Pas de note'
      }
      return result
    })

    return result
  }

  render() {
    const result = this.getStats()
    const data = this.setData(result)

    let chart
    if (result.length) {
      chart =
      <div>
        <Pie data={data.sort((a, b) => {
          return a.value < b.value
        })} />
        <h4>Notes SSL</h4>
      </div>
    }

    return (
        <div className='chart'>
          {chart}
        </div>
      )
  }
}

export default Categories
