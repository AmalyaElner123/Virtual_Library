import React from 'react';

function HomePage() {
  return (
    <div>
      <div style={{ display: 'flex'}}>
      <div>
          <p>שכור כאן את כלי העבודה שאתה צריך
מגוון ענק של כלים, ציוד לבנייה ובניין להשכרה יומית לפי הצורך
צפה בקטלוג המלא כאן באתר, בסרטונים ותמונות של כלי עבודה שהיו בהשכרה
מלבד הכלים הנפוצים שאנחנו משכירים כמו פטיש חציבה, מקדחת יהלום, מהדק אדמה,
מערבל בטון, מכשיר לחיתוך קרמיקה, פטישון מקדחה ומברגות לקידוח והברגה
ניתן למצוא גם סולמות להשכרה, ציוד לעבודה בגובה, משאבות מים, מד טווח לייזר להשכרה וכלים נוספים
</p>
        </div>
        <div>
          <img src={"https://images.wcdn.co.il/f_auto,q_auto,w_1400,t_54/9/1/3/4/913489-46.jpg"} alt="site picture" style={{width: '500px', height: '350px'}} />
        </div>
        
      </div>
      
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
