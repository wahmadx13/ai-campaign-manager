import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Pencil1Icon } from "@radix-ui/react-icons";
import MainNavbar from "@/components/app/components/MainNavbar";
import UserNavbar from "@/components/app/components/UserNavbar";
import { ActiveCampaigns } from "./components/ActiveCampaigns";
import { Overview } from "./components/Overview";
import TeamSwitcher from "./components/TeamSwitcher";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Campaign } from "@/types/campaign";
import SegmentsManager from "./components/Segment";

interface DashboardProps {
  campaigns: Campaign[];
  setCurrentCampaign: (campaign: Campaign) => void;
  segments: string[];
  setSegments: (segments: string[]) => void;
}

export function Dashboard({
  campaigns,
  setCurrentCampaign,
  segments,
  setSegments,
}: DashboardProps) {
  const [isEditingSegments, setIsEditingSegments] = useState<boolean>(false);

  return (
    <>
      <div className='flex-col md:flex'>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            <TeamSwitcher />
            <MainNavbar className='mx-6' />
            <div className='ml-auto flex items-center space-x-4'>
              <UserNavbar />
            </div>
          </div>
        </div>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
            <div className='flex items-center space-x-2'>
              <Button
                variant={"outline"}
                onClick={() => {
                  setIsEditingSegments(true);
                }}>
                <Pencil1Icon className='w-5 h-5 mr-2' /> Edit Segments
              </Button>

              <Button
                onClick={() => {
                  setCurrentCampaign({
                    id: "",
                    keywords: "",
                    title: "",
                    budget: 0,
                    description: "",
                    url: "",
                    headline: "",
                  });
                }}>
                <PlusCircleIcon className='w-5 h-5 mr-2' /> New Campaign
              </Button>
            </div>
          </div>
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value='overview' className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total Cost
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'>
                      <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>$55,875.14</div>
                    <p className='text-xs text-muted-foreground'>
                      +35.5% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Impressions
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'>
                      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                      <circle cx='9' cy='7' r='4' />
                      <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>67M</div>
                    <p className='text-xs text-muted-foreground'>
                      +76.2% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Clicks
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'>
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>5M</div>
                    <p className='text-xs text-muted-foreground'>
                      +74.2% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Conversions
                    </CardTitle>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='h-4 w-4 text-muted-foreground'>
                      <rect width='20' height='14' x='2' y='5' rx='2' />
                      <path d='M2 10h20' />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>231K</div>
                    <p className='text-xs text-muted-foreground'>
                      +41.5% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                <Card className='col-span-4'>
                  <CardHeader>
                    <CardTitle>Spending Overview</CardTitle>
                  </CardHeader>
                  <CardContent className='pl-2'>
                    <Overview />
                  </CardContent>
                </Card>
                <Card className='col-span-3'>
                  <CardHeader>
                    <CardTitle>Active Campaigns</CardTitle>
                    <CardDescription>
                      You have {campaigns.length} active campaign
                      {campaigns.length != 1 && "s"}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ActiveCampaigns
                      campaigns={campaigns}
                      setCurrentCampaign={setCurrentCampaign}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {isEditingSegments && (
        <SegmentsManager
          segments={segments}
          setSegments={setSegments}
          onClose={() => {
            setIsEditingSegments(false);
          }}
        />
      )}
    </>
  );
}
