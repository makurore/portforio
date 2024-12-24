const ProjectsPage = () => (
    <div className="min-h-screen p-8">
      <h2 className="text-4xl font-bold font-montserrat mb-8">プロジェクト</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">プロジェクト1</h3>
          <img
            src="スクリーンショット 2024-12-12 164336.png"
            alt="プロジェクト1のスクリーンショット"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p className="font-roboto">APIを使って天気アプリを作ってみました</p>
        </div>
        
      </div>
    </div>
  );
  export default ProjectsPage;