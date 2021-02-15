// ReSharper disable InconsistentNaming

using System.ComponentModel;

namespace PackageSubscription.Shared.Enums
{
    public enum PackageTypeEnum
    {
        [Description("Europe")]
        EU = 1,

        [Description("US")]
        USA = 2,
        
        [Description("GMT")]
        UK = 3
    }
}
