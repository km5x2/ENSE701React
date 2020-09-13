import React from 'react';
import './App.css';
import './css/Style.css'

function SearchRecord() {
  return (
  
    <div className="SearchRecord">

<center><img src="seer.png"width="20%"></img></center>
<br></br><br></br><br></br>
<center>
   <form action="search.php" method="post">
      <input type="text" id="searchBar" placeholder="Search..." maxlength="25" autocomplete="on" onMouseDown="active();" onBlur="inactive();"/><input type="submit" id = "searchBtn" value = "GO!" />
   </form>
</center>
</div>
  );
}

export default SearchRecord;








