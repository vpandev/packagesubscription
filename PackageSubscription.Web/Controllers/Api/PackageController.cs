using System;
using Microsoft.AspNetCore.Mvc;
using PackageSubscription.Services.Interface;
using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Web.Controllers.Api
{
    public class PackageController : Controller
    {
        private readonly IPackageService _packageService;

        public PackageController(IPackageService packageService)
        {
            _packageService = packageService;
        }

        [HttpGet("Api/GetRecommendedPackage")]
        public IActionResult GetRecommendedPackage()
        {
            return Ok(_packageService.GetPackageByZone(TimeZoneInfo.Local));
        }


        [HttpPost("Api/SubscribeForPackage")]
        public IActionResult SubscribeForPackage([FromBody] PackageSubscribeDto model)
        {
            try
            {
                _packageService.SubscribeForPackage(model);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("Api/CalculateTotalPrice")]
        public IActionResult CalculateTotalPrice([FromQuery] int packageId, [FromQuery] int subscriptionType)
        {
            try
            {
                return Ok(_packageService.CalculateTotalPrice(packageId, subscriptionType, TimeZoneInfo.Local));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}