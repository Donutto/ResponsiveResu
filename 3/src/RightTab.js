function Project({ Text, Data }) {
    const words = Data.split('#');
    return (
      <>
        <strong className="strongText">{Text}</strong>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </>
    );
  }
  
  function RightTab() {
    return (
      <div>
        <strong className="name">Rachata Kaewviset</strong>
        <div className="Rline"></div>
        <div className="right-tab-text">
        Computer Science major student at Kasetsart<br></br> University.Experienced in Java and Python application<br></br> development,
        I am interested in software developer and<br></br> website developer        </div>
        <span className="textWithBG">EDUCATION</span>
        <div className="right-tab-text">
          GPA: 2.62<br />
          Kasetsart University<br />
          Faculty of Science, Major of Computer Science
        </div>
        <strong className="textWithBG">PROJECT</strong>
        <Project Text={"2021 UNIVERSCITY REPORT SYSTEM"}
                Data={"Application that allows students to report issues encountered within the university#Provide these data to the staff#Update status of each problem to the students"}>
                </Project>
                <Project Text={"2022 Rope factory management system"}
                Data={"website development to improve user collaboration between each department, and accounting."}>
                </Project>
                <Project Text={"2023 GARDEN MANAGEMENT WEBSITE "}
                Data={"A website that help collaboration between gardeners and sellers.#Provides overview for gardern owner"}>
                </Project>
                <Project Text={"2024 Dancing game"}
                Data={"use mediaPipe from python to extract the player body poses and send to the unity to process#Calculated the similarity between the player’s pose and reference"}>
                </Project>
                <Project Text={"2024 Design UX/UI mobileapp"}
                Data={"Design and create UX/UI of writing diary mobile app "}>
                </Project>
                <Project Text={"2024 Phubot"}
                Data={"Create ai chat using llm#Guide and recommend to tourist who want to visit phuket"}>
                </Project>
      </div>
    );
  }
  
  export default RightTab;
  