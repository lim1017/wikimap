const getMapPoints = function (db, mapID){
  return db
    .query(
      `
      SELECT *
      FROM points
      WHERE map_id=${mapID}
  `
  ).then(res=>{
    return res.rows;
  })
  .catch(err => console.error("not found"));


}

exports.getMapPoints=getMapPoints;
