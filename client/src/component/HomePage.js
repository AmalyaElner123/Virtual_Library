import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Grid from '@mui/material/Grid';
import Itemim from '@mui/material/Grid';

function HomePage() {
  return (
    <div>
      <Grid container direction="column" rowSpacing={1} columnSpacing={{ xs: 1}}> 
      
        <Grid item xs>
          <Itemim>
      <div>
          <p>שכור כאן את כלי העבודה שאתה צריך
מגוון ענק של כלים, ציוד לבנייה ובניין להשכרה יומית לפי הצורך
צפה בקטלוג המלא כאן באתר, בסרטונים ותמונות של כלי עבודה שהיו בהשכרה
מלבד הכלים הנפוצים שאנחנו משכירים כמו פטיש חציבה, מקדחת יהלום, מהדק אדמה,
מערבל בטון, מכשיר לחיתוך קרמיקה, פטישון מקדחה ומברגות לקידוח והברגה
ניתן למצוא גם סולמות להשכרה, ציוד לעבודה בגובה, משאבות מים, מד טווח לייזר להשכרה וכלים נוספים
</p>
        </div></Itemim>
        </Grid>
        <Grid item xs>
          <Itemim>
        <div>
          <img src={"https://images.wcdn.co.il/f_auto,q_auto,w_1400,t_54/9/1/3/4/913489-46.jpg"} alt="site picture" style={{width: '500px', height: '350px'}} />
        </div></Itemim>
       </Grid>
      </Grid>
      
      <div className="linksHome">
        <a href="/ShowItems" className="linkHome">לרשימת המוצרים</a>
        
        <a href="/PrivateArea" className="linkHome">משתמש חדש/רשום</a>
        {/* <Button  label="לרשימת המוצרים" className="mt-2" ></Button>
        <Button  label="משתמש חדש/רשום" className="mt-2" ></Button> */}
      </div>
    </div>
  );
}

export default HomePage;
