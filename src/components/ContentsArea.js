const ContentArea = ({ children }) => {
  return (
    <main className="flex flex-1 bg-gray-100 overflow-y-auto">
      {children}
    </main>
  );
};

export default ContentArea;