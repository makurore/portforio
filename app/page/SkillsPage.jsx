const SkillsPage = () => (
    <div className="min-h-screen p-8">
      <h2 className="text-4xl font-bold font-montserrat mb-8">スキル</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">フロントエンド</h3>
          <ul className="font-roboto">
            <li className="mb-2">
              <i className="fab fa-html5 mr-2"></i>HTML5
            </li>
            <li className="mb-2">
              <i className="fab fa-css3-alt mr-2"></i>CSS3
            </li>
            <li className="mb-2">
              <i className="fab fa-js mr-2"></i>JavaScript
            </li>
            <li className="mb-2">
              <i className="fab fa-react mr-2"></i>React
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">バックエンド</h3>
          <ul className="font-roboto">
            <li className="mb-2">
              <i className="fab fa-node mr-2"></i>Node.js
            </li>
            <li className="mb-2">
              <i className="fas fa-database mr-2"></i>SQL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  export default SkillsPage;