function loadXML() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseXML(this.responseXML);
    }
  };
  // (A) ระบุไฟล์ XML ที่ต้องการโหลด
  xhttp.open("GET", "movie.xml", true);
  xhttp.send();
}


  function parseXML(xml) {
    let movieList = xml.getElementsByTagName("movie");

    let container = document.getElementById("xmlDataContainer");
    container.innerHTML = "";
  
    for (let i = 0; i < movieList.length; i++) {
      let title = movieList[i].getElementsByTagName("title")[0].textContent;
      // (B) ดึงค่า genre จากแท็ก <genre>
      let genre = movieList[i].getElementsByTagName("genre")[0].textContent;
      // (C) ดึงค่า year จากแท็ก <year>
      let year = movieList[i].getElementsByTagName("year")[0].textContent;
      // (D) ดึงค่า director จากแท็ก <director>
      let director = movieList[i].getElementsByTagName("director")[0].textContent;
      // (E) ดึงค่า duration จากแท็ก <duration>
      let duration = movieList[i].getElementsByTagName("duration")[0].textContent;
  
      // (F) ดึงรายชื่อนักแสดงทั้งหมดจากแท็ก <actor>
      let cast = movieList[i].getElementsByTagName("actor");
      let castList = "";
      for (let j = 0; j < cast.length; j++) {
        castList += cast[j].textContent + ", ";
      }

      // Remove the trailing comma and space
      castList = castList.slice(0, -2);

      let movieDiv = document.createElement("div");
      // (G)-(K) แสดง Genre, Year, Director, Cast, Duration บนหน้าเว็บ
      movieDiv.innerHTML = "<strong>Title:</strong> " + title + "<br>" +
                           "<strong>Genre:</strong> " + genre + "<br>" +       // (G)
                           "<strong>Year:</strong> " + year + "<br>" +         // (H)
                           "<strong>Director:</strong> " + director + "<br>" + // (I)
                           "<strong>Cast:</strong> " + castList + "<br>" +     // (J)
                           "<strong>Duration:</strong> " + duration + "<br><br>"; // (K)
  
      container.appendChild(movieDiv);
    }
  }
