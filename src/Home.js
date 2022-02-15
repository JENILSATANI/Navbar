import React from "react";
import MaterialTable from 'material-table'

 const Home = () =>{
  const data = [
    { name: 'aman', age: 25 ,skill:'React.js'},
    { name: 'rahul', age: 2, skill:'HTML' },
    { name: 'krunal', age: 25,skill:'CSS' },
    { name: 'aman', age: 25 ,skill:'React.js'},
    { name: 'rahul', age: 2, skill:'HTML' },
    { name: 'krunal', age: 25,skill:'CSS' }
  ]
  const columns=[{
       title:"Name",
       field:"name"
  },
  {
    title:"Age",
    field:"age"
  },
  {
    title:"Skill",
    field:"skill"
  }
]
  return (
    <div class='qq'>
      <MaterialTable  title='Table-Data' 
      data={data}
      columns={columns}
      />
    </div>
  )
}
export default Home


// import React from 'react'

// import MaterialTable from 'material-table'
// const Home =() => {

  

//   const columns=[
//     {
//       title:'Name',
//       field:'name'
//     },
//     {
//     title:'Age',
//     field:'age'
//     },
//     {
//       title:'Place',
//       field:'place'
//       }
//   ]

//  return (
//    <div>

//    </div>
//  )

// export default Home
 {/* <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper:classes.drawerPaper}}
          >
          <div>
            <Typography variant='h5'>Menu</Typography>
          </div>
        </Drawer> */}
      //   const useStyles = makeStyles({
      //     drawer:{
      //           width:drawerWidth
      //     },
      //     drawerPaper:{
      //       width:drawerWidth
      // },
      // root:{
      //   display:'flex'
      // }
      // })