﻿using System.ComponentModel;

namespace PackageSubscription.Shared.Helpers
{
    public static class EnumDescription
    {
        public static string GetEnumDescription(System.Enum value)
        {
            var fi = value.GetType().GetField(value.ToString());

            var attributes =
                (DescriptionAttribute[])fi.GetCustomAttributes(
                    typeof(DescriptionAttribute),
                    false);

            return attributes.Length > 0 ? attributes[0].Description : value.ToString();
        }
    }
}
