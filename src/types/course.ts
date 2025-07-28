/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinEngagementBackground {
  image: string;
  primary_color: string;
  secondary_color: string;
}

export interface GroupJoinEngagementCta {
  clicked_url: string;
  color: string;
  text: string;
}

export interface GroupJoinEngagementValue {
  background: GroupJoinEngagementBackground;
  cta: GroupJoinEngagementCta;
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface TestimonialValue {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FaqValue {
  answer: string;
  id: string;
  question: string;
}

export type Language = "en" | "bn";
export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: (
    | OfferValue
    | InstructorValue
    | FeatureValue
    | GroupJoinEngagementValue
    | PointerValue
    | AboutValue
    | FeatureExplanationValue
    | TestimonialValue
    | FaqValue
    | any
  )[];
}

export interface MetaTag {
  content: string;
  type: "property" | "name";
  value: string;
}

export interface SchemaItem {
  meta_name: "ld-json";
  meta_value: string;
  type: "ld-json";
}

export interface SEOData {
  defaultMeta: MetaTag[];
  description: string;
  keywords: string[];
  schema: SchemaItem[];
  title: string;
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: SEOData;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: CourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
