import React from "react";
import { Container } from "reactstrap";

import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subHeaderContainer">
      <Container>
        ملاحظه: لا تعد النتائج المذكوره أدناه نهائية وتعتمد بشكل رئيسي على
        قرارات اللجنة المنظمة للمهرجان ونتائج الفحص الطبي
      </Container>
    </div>
  );
};

export default SubHeader;
