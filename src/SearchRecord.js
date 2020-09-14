import React, { useState } from 'react';
import './App.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './css/Style.css'



function SearchRecord() {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (

    <div className="SearchRecord">

<center><img src="seer.png"width="20%"></img></center>
<br></br>
<DateRangePicker
        onChange={onChange}
        value={value}
      />
<br></br><br></br>
<center>
   <form action="search.php" method="post">
      <input type="text" id="searchBar" placeholder="Search..." maxlength="25" autocomplete="on" onMouseDown="active();" onBlur="inactive();"/><input type="submit" id = "searchBtn" value = "GO!" />
   </form>
</center>
</div>
  );
}

export default SearchRecord;








