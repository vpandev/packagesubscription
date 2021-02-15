using System;
using Microsoft.AspNetCore.Mvc;
using PackageSubscription.Services.Interface;
using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Web.Controllers.Api
{
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Api/LoginUser")]
        public IActionResult LoginUser([FromBody]LoginUserDto model)
        {
            try
            {
                return Ok(_userService.LoginUser(model));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}