namespace PackageSubscription.Shared.DataResponse
{
    public class DataResponse<T>
    {
        public bool Succeeded { get; set; }
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
    }
}
