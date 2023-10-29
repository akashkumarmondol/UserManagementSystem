using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserManagementSystem.Models
{
    public class SignUpTable
    {
        public string EmpId { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string UserId { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}