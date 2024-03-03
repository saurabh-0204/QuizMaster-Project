using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using QuizMaster1.Models;

namespace QuizMaster1.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	
	public class StudentController : Controller
	{
		[HttpGet]

		public List<Student> getAllStudent()
		{
			List<Student> list = new List<Student>();
			using(var sw=new quizmasterContext())
			{
				list=sw.Students.ToList();
			}
			return list;
		}

		
		
	}
}
