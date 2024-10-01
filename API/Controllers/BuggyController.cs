using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class BuggyController : Controller
    {
        
      [HttpGet("not-found")]
      public ActionResult GetNotFound(){
        return NotFound();
      }
      [HttpGet("bad-request")]
      public ActionResult GetBadRequest(){
         return BadRequest(new ProblemDetails { Title = "This is a bad request" });
      }
      [HttpGet("unauthorised")]
      public ActionResult GetUnatuhorised(){
        return Unauthorized();
      }


      [HttpGet("validation-error")]
      public ActionResult GetValidationError(){
          ModelState.AddModelError("problrm1","This is the first error");
          ModelState.AddModelError("problrm2","This is the second error");
          return ValidationProblem();
      }
       
       [HttpGet("server-error")]
     public ActionResult GetServerError(){
        throw new Exception("This is a server error");
     }
 
    }
}