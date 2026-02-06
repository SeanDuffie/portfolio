import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';

export function ExperiencePage() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-foreground">Experience & Education</h1>
          <p className="text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Client visible? */}
          <TabsContent value="experience" className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="p-6 bg-secondary border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 text-foreground">{exp.positionName}</h3>
                        <div className="text-muted-foreground">{exp.companyName} • {exp.city}, {exp.state}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {months[exp.startMonth - 1]} {exp.startYear} - {exp.endYear === undefined ? 'Present' : months[exp.endMonth - 1] + ' ' + exp.endYear}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm mb-2 text-gray-300">Key Achievements:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.responsibilities.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Client visible? */}
          <TabsContent value="education" className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-6 bg-secondary border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600 text-purple-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 text-foreground">{edu.degreeType} in {edu.degreeName}</h3>
                        <div className="text-muted-foreground">{edu.schoolName} • {edu.city}, {edu.state}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {months[edu.startMonth - 1]} {edu.startYear} - {edu.endYear === undefined ? 'Present' : months[edu.endMonth - 1] + ' ' + edu.endYear}
                      </div>
                    </div>
                    
                    {edu.gpa !== undefined && (
                      <div className="mb-4">
                        <Badge variant="outline">GPA: {edu.gpa}</Badge>
                      </div>
                    )}
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div>
                      <div className="text-sm mb-2 text-gray-300">Notable Classes:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.notableClasses.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="text-sm mb-2 text-gray-300">Notable Projects:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.notableProjects.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="text-sm mb-2 text-gray-300">Skills:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.skills.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Client visible? */}
          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="p-6 bg-secondary border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 text-foreground">{cert.credentialName}</h3>
                        <div className="text-muted-foreground">{cert.issuer}</div>
                      </div>
                      <div className="text-sm text-gray-500 text-gray-400">{months[cert.Month - 1]} {cert.Year}</div>
                    </div>
                    
                    <div className="text-sm text-gray-500 text-gray-400">
                      Credential ID: {cert.credentialId}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
