const NotFoundPage = () => {
  return ( 
    <div className="w-full h-full bg-slate-300 flex flex-col justify-center items-center md:*:text-2xl md:*:p-0.5">
      <div className="text-lg my-3">
        404
      </div>
      <div>
        Not found
      </div>
      <div>
        Страница не найдена
      </div>
      <a href="/" className="p-3 text-blue-600">
        Back
      </a>
    </div>
   );
}
 
export default NotFoundPage;