import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 


      return (
        <tbody>
          {props.gulsen.map((elem,index)=>{
            return (<tr key={index}>
            <td>{elem.name}</td>
            <td>{elem.job}</td>
          </tr>
        
      )
   })}
   </tbody>
      )
           
}

class Table extends Component {
    render() {
 const isim = this.props.users;

      return (
        <table>
          <TableHeader />
          <TableBody gulsen={isim}/>
        </table>
      )
    }
  }

export default Table;
