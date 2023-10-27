import { Component } from '@angular/core';

@Component({
  selector: 'app-our-management',
  templateUrl: './our-management.component.html',
  styleUrls: ['./our-management.component.css']
})
export class OurManagementComponent {
  managements = [
    {
      name: "Edgar Handoko, S.H.",
      position: "CEO & Partner",
      description: "As the CEO of Barack Legal Indonesia and Partner of EDGE Law, Edgar Handoko takes pride in providing the best yet fast and affordable legal services to all of the clients. With more than 4 years of experiences, Edgar has been involved in various corporate legal projects where he has represented numerous Indonesian and international company.",
      formal_education: [
        "Bachelor of Law, Faculty of Law of the University of Gadjah Mada, Yogyakarta, Indonesia",
        "Candidate for Master of Financial Management, Faculty of Economics and Business of the Univeristy of Indonesia, Depok, Indonesia"
      ],
      certifications_licenses: [
        "Licensed Advocate and Solicitor under the Indonesian Bar Association (Perhimpunan Advokat Indonesia – \"<strong>PERADI</strong>\")",
        "Licensed Receiver and Administrator under the Indonesian Association of Receiver and Administrator (Ikatan Kurator dan Pengurus Indonesia – \"<strong>IKAPI</strong>\")",
        "Licensed Tax Lawyer under the Tax Court of the Republic Indonesia",
        "Certified Tax Brevet AB by Faculty of Economics and Business of the University of Gadjah Mada, Yogyakarta, Indonesia"
      ],
      image: "assets/edgar-handoko.jpg",
      active: true,
    },
    {
      name: "Georgine B. Sahetapy, S.H., LL.M.",
      position: "CPO & Managing Partner",
      description: "With more than 8 years of experiences, Georgine B. Sahetapy as the Managing Partner of EDGE Law and CPO of Barack Legal Indonesia has been involved and leading in various corporate commercial dispute cases. Georgine has representing diverse clients from a domestic-level clients to the multinational-level clients.",
      formal_education: [
        "Bachelor of Law, Faculty of Law of the University of Indonesia, Depok, Indonesia",
        "Master of International Finance Law, Institute for Law and Finance, Goethe-Universität, Frankfurt, Germany"
      ],
      certifications_licenses: [
        "Licensed Advocate and Solicitor under the Congress of Indonesian Advocates (Kongres Advokat Indonesia – \"<strong>KAI</strong>\")",
        "Licensed Receiver and Administrator under the Indonesian Association of Receiver and Administrator (Ikatan Kurator dan Pengurus Indonesia – \"<strong>IKAPI</strong>\")",
        "Licensed and Registered Mediator at Jakarta District Courts",
      ],
      image: "assets/georgine-b-sahetapy.jpg",
      active: false,
    }
  ]
}
