//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CSM.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Complaint
    {
        public int complaint_id { get; set; }
        public string complaint1 { get; set; }
        public string status { get; set; }
        public System.DateTime placed_date { get; set; }
        public Nullable<System.DateTime> resolved_date { get; set; }
        public int order_id { get; set; }
        public int customer_id { get; set; }
        public int role_id { get; set; }
    
        public virtual Order Order { get; set; }
        public virtual User_Info User_Info { get; set; }
        public virtual Role Role { get; set; }
    }
}
