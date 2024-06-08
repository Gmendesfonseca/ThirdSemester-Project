namespace InnerAPI.Dtos.Courses
{
    public record class CourseDto
    (
        int id,
        string name,
        string description,
        string workload,
        string period
    );
}
